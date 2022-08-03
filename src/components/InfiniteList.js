import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ListCard from "./ListCard";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import Header from "./Header";

const InfiniteList = () => {
  const [users, setUsers] = useState([]);

  const [state, setState] = useState({
    items: Array.from({ length: 20 }),
    loading: true,
  });

  const fetchData = () => {
    axios
      .get(`https://randomuser.me/api?results=1000`)
      .then((res) => {
        setUsers(res.data.results);
        setState({ ...state, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setState({
        items: state.items.concat(Array.from({ length: 20 })),
      });
    }, 1500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container py-5 mt-5">
        <h1 className="text-center mt-3">
          <b>Infinite Loading List</b>
        </h1>
        <hr />
        {users && users.length > 0 ? (
          <InfiniteScroll
            dataLength={state.items.length}
            next={fetchMoreData}
            hasMore={true}
            loader={
              <>
                <div className="row cards-row">
                  <div className="card col-md-6 my-3">
                    <Skeleton height={20} count={4} /> <Skeleton height={100} />
                    <Skeleton /> <Skeleton height={100} />
                  </div>
                </div>
              </>
            }
          >
            {state.items.map((i, index) => (
              <ListCard
                key={index}
                user={users[index]}
                loading={state.loading}
              />
            ))}
          </InfiniteScroll>
        ) : (
          state.items.map((i, index) => (
            <>
              <div className="row cards-row">
                <div className="card col-md-6 my-3">
                  <Skeleton height={20} count={4} /> <Skeleton height={100} />
                  <Skeleton /> <Skeleton height={100} />
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </div>
  );
};

// export default InfiniteList

// class InfiniteList extends React.Component {
//   state = {
//     items: Array.from({ length: 20 }),
//   };

//   fetchMoreData = () => {
//     // a fake async api call like which sends
//     // 20 more records in 1.5 secs
//     setTimeout(() => {
//       this.setState({
//         items: this.state.items.concat(Array.from({ length: 20 })),
//       });
//     }, 1500);
//   };

//   render() {
//     return (
//       <div>
//         <h1>Infinite Loading List</h1>
//         <hr />
//         <InfiniteScroll
//           dataLength={this.state.items.length}
//           next={this.fetchMoreData}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//         >
//           {this.state.items.map((i, index) => (
//             <ListCard />
//           ))}
//         </InfiniteScroll>
//       </div>
//     );
//   }
// }

export default InfiniteList;
