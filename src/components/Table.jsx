import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spinner from "./Spinner"

const Error = ({ message }) => {
    return (
        <div className="mx-auto col-6 m-5">
            <div class="alert alert-danger" role="alert">{message}</div>
        </div>
    )
}

const Table = () => {

    const { posts = [], loading, error } = useSelector((store) => store.data);
    console.log(loading);
    return (
        <div>
            {
                error !== "" && <Error message={"Something Wrong...!"} />
            }
            {
                loading ? <Spinner /> :
                    <table className="table">
                        <thead>
                            <tr>
                                <th>UserID</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((post, i) => {
                                    return (
                                        <Fragment>
                                            <tr key={i}>
                                                <td>{post.userId}</td>
                                                <td>{post.id}</td>
                                                <td>{post.title}</td>
                                                <td>{post.body}</td>
                                            </tr>
                                        </Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
        </div >
    );
};


export default Table;