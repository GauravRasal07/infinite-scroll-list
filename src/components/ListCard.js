import React from "react";
import Skeleton from "react-loading-skeleton";
const ListCard = (props) => {
  // let { gender, email } = props.user;
  let { loading, user } = props;
  return (
    <div className="row cards-row">
      <div className="card col-md-6 my-3">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <img className="card-img" src={user.picture.large} alt="user" />
          </div>
          <div className="col-md-6 col-lg-9">
            <div className="card-body px-3">
              <h5 className="card-title">
                {loading ? (
                  <Skeleton height={20} count={1} />
                ) : (
                  <>
                    <strong>Name: </strong>
                    {user.name.title +
                      ". " +
                      user.name.first +
                      " " +
                      user.name.last}
                  </>
                )}
              </h5>
              <p>
                {loading ? (
                  <Skeleton height={20} count={1} />
                ) : (
                  <>
                    <strong>Username: </strong>
                    {user.login.username}
                  </>
                )}
              </p>
              <p>
                {loading ? (
                  <Skeleton height={20} count={1} />
                ) : (
                  <>
                    <strong>Gender: </strong>
                    {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                  </>
                )}
              </p>
              <p>
                {loading ? (
                  <Skeleton height={20} count={1} />
                ) : (
                  <>
                    <strong>Date of Birth: </strong>
                    {user.dob.date.split("T")[0]}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="card-text px-3">
            <p>
              {loading ? (
                <Skeleton height={20} count={1} />
              ) : (
                <>
                  <strong>Contact: </strong>
                  {user.cell}
                </>
              )}
            </p>
            <p>
              {loading ? (
                <Skeleton height={20} count={1} />
              ) : (
                <>
                  <strong>Mail ID: </strong>
                  {user.email}
                </>
              )}
            </p>
            <p>
              {loading ? (
                <Skeleton height={20} count={1} />
              ) : (
                <>
                  <strong>Address: </strong>
                  {user.location.city +
                    ", " +
                    user.location.state +
                    ", " +
                    user.location.country +
                    " - " +
                    user.location.postcode}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
