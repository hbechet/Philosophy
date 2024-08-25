import { useContext, useEffect, useState } from 'react';
import '../App.css';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import getUsers from '../utils/getUsers';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import deleteUser from '../utils/deleteUser';

function UsersPage() {

    const { token, roleContext } = useContext(AuthContext);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        if (token) {
            var res = getUsers(token);
            res.then((info) => {
                setUsersData(info.data);
            })
                .catch((error) => {
                    console.error(`Could not get data: ${error}`);
                })
        }
    }, [token]);

    const navigate = useNavigate();

    const handleLogin = (() => {
        navigate('/login');
    })

    const handleDelete = (ev) => {
        const id = ev.target.id;
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id, token);
                Swal.fire({
                    title: "Deleted!",
                    text: "The element has been deleted.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/profile');
                    }
                })
            }
        });
    }

    if (roleContext === 'admin') {
        return (
            <div className='container'>
                <div className='content philos'>
                    {usersData.map((user, index) => {
                        return (
                            <Card key={index} style={{ width: '20rem' }}>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
                                    <Card.Text>
                                        <span><b>Email:</b> {user.email}</span>
                                    </Card.Text>
                                    <Button className="btn btn-danger" id={user._id} onClick={handleDelete} >Delete</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className='content'>
                <h2>You are not the Administrator... nice try! ;)</h2>
                <button className='btn btn-primary mt-3' onClick={handleLogin}>Login</button>
            </div>
        </div>
    );

}
export default UsersPage;