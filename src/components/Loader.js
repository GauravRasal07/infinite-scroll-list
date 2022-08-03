import './styles.css'
import { PropsWithChildren, useState } from 'react'
import { User, users } from './users'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface PostProps {
    loading: boolean
}

function Post({ loading }: PostProps) {
    return (
        <div className="post">
            <div className="left-col">
                <div className="avatar">
                    {loading && (
                        <Skeleton
                            circle
                            height="100%"
                            containerClassName="avatar-skeleton"
                        />
                    )}
                    <img
                        src="smile.svg"
                        alt="A user avatar"
                        style={{ display: loading ? 'none' : undefined }}
                    />
                </div>
                <div className="user-name">
                    {loading ? <Skeleton width={70} /> : 'John Doe'}
                </div>
            </div>
            <div className="right-col">
                <h3>{loading ? <Skeleton /> : 'Use React Loading Skeleton!'}</h3>
                <p className="mb-0">
                    {loading ? (
                        <Skeleton count={3} />
                    ) : (
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum nec justo feugiat, auctor nunc ac, volutpat arcu.
                            Suspendisse faucibus aliquam ante, sit amet iaculis dolor
                            posuere et. In ut placerat leo.
                        </>
                    )}
                </p>
            </div>
        </div>
    )
}

interface ListItemProps {
    loading: boolean
}

function ListItem({ loading, children }: PropsWithChildren<ListItemProps>) {
    return <div className="list-item">{loading ? <Skeleton /> : children}</div>
}

interface TableRowProps {
    loading: boolean
    user: User
}

function TableRow({ loading, user }: TableRowProps) {
    const status = user.active ? 'Active' : 'Inactive'

    return (
        <tr>
            <td>{loading ? <Skeleton /> : user.id}</td>
            <td>{loading ? <Skeleton /> : user.name}</td>
            <td>{loading ? <Skeleton /> : user.role}</td>
            <td>{loading ? <Skeleton /> : status}</td>
        </tr>
    )
}

function InlineWrapperWithMargin({ children }: PropsWithChildren<unknown>) {
    return <span style={{ marginRight: '0.5rem' }}>{children}</span>
}

// Use https://bennettfeely.com/clippy/ to try out other shapes
function StarWrapper({ children }: PropsWithChildren<unknown>) {
    return (
        <div
            style={{
                display: 'inline-block',
                clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                width: '100px',
                height: '100px'
            }}
        >
            {children}
        </div>
    )
}

export default function App() {
    const [loading, setLoading] = useState(true)

    function renderLoadingControl(i: number) {
        return (
            <div className="form-check mb-4">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id={`loadingCheckbox${i}`}
                    checked={loading}
                    onChange={() => setLoading((b) => !b)}
                />
                <label className="form-check-label" htmlFor={`loadingCheckbox${i}`}>
                    Loading
                </label>
            </div>
        )
    }

    return (
        <div className="App">
            <h1 className="mb-4">React Loading Skeleton</h1>

            {renderLoadingControl(0)}

            <div className="mb-4">
                <h2>A Blog Post</h2>
                <Post loading={loading} />
            </div>

            <div className="mb-4">
                <h2>A List</h2>
                <ListItem loading={loading}>List Item 1</ListItem>
                <ListItem loading={loading}>List Item 2</ListItem>
                <ListItem loading={loading}>List Item 3</ListItem>
            </div>

            <div className="mb-4">
                <h2>A Table with Theming</h2>
                <SkeletonTheme
                    baseColor="#5294e0"
                    highlightColor="#96c7ff"
                    borderRadius="0.5rem"
                    duration={4}
                >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u) => (
                                <TableRow key={u.id} user={u} loading={loading} />
                            ))}
                        </tbody>
                    </table>
                </SkeletonTheme>
            </div>

            <div className="mb-4">
                <h2>Inline Skeletons</h2>
                {loading ? (
                    <Skeleton
                        count={5}
                        wrapper={InlineWrapperWithMargin}
                        inline
                        width={90}
                    />
                ) : (
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                )}
            </div>

            <div className="mb-4">
                <h2>
                    Wow!{' '}
                    <span role="img" aria-hidden>
                        🤩
                    </span>
                </h2>
                <Skeleton
                    count={5}
                    wrapper={StarWrapper}
                    height="100%"
                    baseColor="#ebab34"
                    highlightColor="#f2cb07"
                    duration={0.9}
                />
            </div>

            {renderLoadingControl(1)}
        </div>
    )
}
