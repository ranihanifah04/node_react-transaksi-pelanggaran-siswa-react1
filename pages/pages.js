import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home'
import Login from './login'
import Pegawai from './pegawai'
import Pelanggaran from './pelanggaran'
import PelanggaranSiswa from './pelanggaran_siswa'
import Register from './register'
import Siswa from './siswa'


const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/pelanggaran' component={Pelanggaran} />
        <Route path='/pelanggaran_siswa' component={PelanggaranSiswa} />
        <Route path='/siswa' component={Siswa} />

    </Switch>
)

export default Pages;

