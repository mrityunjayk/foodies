import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Index from './components/Index';
import Offers from './components/Offers';
import MyAccount from './components/MyAccount';
import List from './components/List';
import NotFound from './components/NotFound';
import Thanks from './components/Thanks';
import Extra from './components/Extra';
import Login from './components/Login';
import Register from './components/Register';
import TrackOrder from './components/TrackOrder';
import Invoice from './components/Invoice';
import Checkout from './components/Checkout';
import Detail from './components/Detail';
import App from './App';
import { settings } from 'cluster';

let api: PiletApi = undefined;
export function setGrandTotal(checkoutitem) {
  console.log('Dynamic Checkout page');
  api.setData('checkoutitem',checkoutitem);
  console.log('Dynamic Checkout page grandTotal: '+checkoutitem);
}


export function setup(app: PiletApi) {
  api = app;
  app.registerPage('/dynamiccheckout', Checkout, {
    initialColumns: 20,
    initialRows: 5,
  });
}
