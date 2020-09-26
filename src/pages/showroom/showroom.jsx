import React from 'react';
import { IconButton, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { FaPen } from 'react-icons/fa';
import { PrimaryTemplate } from '../../template';
import { AdminTemplate } from '../../template';


class ShowRoom extends React.Component {
    render(){
        return (
            <PrimaryTemplate>
                <AdminTemplate>
                    <TableContainer>
                        <Table>
                            <TableHead style={{ backgroundColor: '#09080e', color: '#fff' }}>
                                <TableRow>
                                    <TableCell style={{color: '#fff' }}>Name</TableCell>
                                    <TableCell style={{color: '#fff' }}>Email</TableCell>
                                    <TableCell style={{color: '#fff' }}>Address</TableCell>
                                    <TableCell style={{color: '#fff' }}>Call Tracking</TableCell>
                                    <TableCell style={{color: '#fff' }}>Edit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Arabeti Rent a Car</TableCell>
                                    <TableCell>info@arabeti.com</TableCell>
                                    <TableCell>Auto Market, Dubai</TableCell>
                                    <TableCell>Disabled</TableCell>
                                    <TableCell><IconButton><FaPen size="18"/></IconButton></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Arabeti Rent a Car</TableCell>
                                    <TableCell>info@arabeti.com</TableCell>
                                    <TableCell>Auto Market, Dubai</TableCell>
                                    <TableCell>Disabled</TableCell>
                                    <TableCell><IconButton><FaPen size="18"/></IconButton></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Arabeti Rent a Car</TableCell>
                                    <TableCell>info@arabeti.com</TableCell>
                                    <TableCell>Auto Market, Dubai</TableCell>
                                    <TableCell>Disabled</TableCell>
                                    <TableCell><IconButton><FaPen size="18"/></IconButton></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Arabeti Rent a Car</TableCell>
                                    <TableCell>info@arabeti.com</TableCell>
                                    <TableCell>Auto Market, Dubai</TableCell>
                                    <TableCell>Disabled</TableCell>
                                    <TableCell><IconButton><FaPen size="18"/></IconButton></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Arabeti Rent a Car</TableCell>
                                    <TableCell>info@arabeti.com</TableCell>
                                    <TableCell>Auto Market, Dubai</TableCell>
                                    <TableCell>Disabled</TableCell>
                                    <TableCell><IconButton><FaPen size="18"/></IconButton></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AdminTemplate>
            </PrimaryTemplate>
        )
    }
}

export default ShowRoom;