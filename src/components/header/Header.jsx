import React from "react";
import { connect } from "react-redux";
import { auth } from "firebase/firebase.utils";
import { ReactComponent as Logo } from "assets/eshop.svg";
import CartIcon from "components/cart-icon/CartIcon";
import CartDropDown from "components/cart-dropdown/CartDropDown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "redux/user/user.selectors";
import { selectCartHidden } from "redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv to="/" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
