import React from "react";
import "./assets/sass/main.scss";
import 'swiper/swiper.scss'
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import PhonenTablet from "./pages/Categry/PhonenTablet";
import Supermarket from "./pages/Categry/Supermarket";
import Account from "./pages/Account";
import RecentlyViewed from "./pages/RecentlyViewed";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";
import Fashion from "./pages/Categry/Fashion";
import HealthnBeauty from "./pages/Categry/HealthnBeauty";
import HomenOffice from "./pages/Categry/HomenOffice";
import OtherCategories from "./pages/Categry/OtherCategories";
import Sports from "./pages/Categry/Sports";
import BabyProducts from "./pages/Categry/BabyProducts";
import Computing from "./pages/Categry/Computing";
import Electronics from "./pages/Categry/Electronics";
import Gaming from "./pages/Categry/Gaming";
import MyAccount from "./pages/Customer_MobileView/MyAccount";
import MyOrders from "./pages/Customer_MobileView/MyOrders";
import MyPendingReviews from "./pages/Customer_MobileView/MyPendingReviews";
import MyVoucher from "./pages/Customer_MobileView/MyVoucher";
import MySavedItems from "./pages/Customer_MobileView/MySavedItems";
import MyDetails from "./pages/Customer_MobileView/MyDetails";
import MyAddressBook from "./pages/Customer_MobileView/MyAddressBook";
import MyPassword from "./pages/Customer_MobileView/MyPassword";
import MyNewsletter from "./pages/Customer_MobileView/MyNewsletter";
import EditAddressComp from "./components/Account/EditAddressComp";
import MobileEditAddress from "./pages/Customer_MobileView/MobileEditAddress";
import HelpCenter from "./pages/Help/HelpCenter";
import PlacenTrackOrder from "./pages/Help/PlacenTrackOrder";
import Pay from "./pages/Pay";
import OrderCancellation from "./pages/Help/OrderCancellation";
import ReturnRefunds from "./pages/Help/ReturnRefunds";
import HowToPay from "./pages/Help/HowToPay";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Terms from "./pages/Markerting/Terms";
import PrivacyPolicy from "./pages/Markerting/PrivacyPolicy";
import Partners from "./pages/Markerting/Partners";
import ChangeAddress from "./pages/CheckOut/ChangeAdress";
import UpdateAddress from "./pages/CheckOut/UpdateAddress";
import SellOnWoozee from "./pages/SellOnWoozee";
import FourOFour from "./pages/FourOFour";


function App({current}) {

  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#043E7D",
      },
      secondary: {
        main: "#FF5757",
      },
    },
  });

  return (
    <Router >
      <MuiThemeProvider theme={theme}>
     
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/customer/"} component={Account} />
            <Route path={"/recentlyViewed"} component={RecentlyViewed} />
            <Route path={"/cart"} component={Cart} />
            <Route path={"/checkout"} component={CheckOut} />
            <Route path={"/changeAddress"} component={ChangeAddress} />
            <Route path={"/updateAddress"} component={UpdateAddress} />
            <Route path={"/help"} component={HelpCenter} />
            <Route path={"/place-track-order"} component={PlacenTrackOrder} />
            <Route path={"/pay"} component={Pay} />
            <Route path={"/cancel-order"} component={OrderCancellation} />
            <Route path={"/how-to-pay"} component={HowToPay} />
            <Route path={"/terms-of-use"} component={Terms} />
            <Route path={"/privacy"} component={PrivacyPolicy} />
            <Route path={"/logistics-partner"} component={Partners} />
            <Route path={"/sell-on-woozeee"} component={SellOnWoozee} />



            {/* {!current ? (
            <Redirect to="/" />
          ) : ( */}
            <Route exact path="/product/:id" component={ProductDetail} />
           {/* )}  */}


            {/* Mobile View */}
            <Route path={"/account"} component={MyAccount} />
            <Route path="/orders" component={MyOrders} />
            <Route path="/reviews" component={MyPendingReviews} />
            <Route path="/vouchers" component={MyVoucher} />
            <Route path="/saved" component={MySavedItems} />
            <Route path="/details" component={MyDetails} />
            <Route path="/addressBook" component={MyAddressBook} />
            <Route path="/changePassword" component={MyPassword} />
            <Route path="/newsletter" component={MyNewsletter} />
            <Route path="/editAddress" component={EditAddressComp} />
            <Route path="/editAddress_m" component={MobileEditAddress} />
            <Route path="/returns-refunds" component={ReturnRefunds} />

            {/* Categories */}
            <Route path={"/phones-tablets"} component={PhonenTablet} />
            <Route path={"/supermarket"} component={Supermarket} />
            <Route path={"/fashion"} component={Fashion} />
            <Route path={"/baby-products"} component={BabyProducts} />
            <Route path={"/computing"} component={Computing} />
            <Route path={"/electronics"} component={Electronics} />
            <Route path={"/gaming"} component={Gaming} />
            <Route path={"/health-beauty"} component={HealthnBeauty} />
            <Route path={"/home-office"} component={HomenOffice} />
            <Route path={"/sports"} component={Sports} />
            <Route path={"/others"} component={OtherCategories} />

            {/* Not Found */}
            <Route path="/*" component={FourOFour} />
          </Switch>

      </MuiThemeProvider>
    </Router>
  );
}

export default App;
