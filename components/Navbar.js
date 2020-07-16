import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { signOut } from "./lib/signout";
import { useDispatch, useSelector } from "react-redux";
import { user_logout, user_login } from "../redux/users/action";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 3),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();
  let flag = useSelector((state) => state.users.loginFlag);
  console.log(flag);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  useEffect(() => {
    let str = localStorage.getItem("loginFlag");
    let userId = localStorage.getItem("userId");
    let idToken = localStorage.getItem("idToken");
    let userName = localStorage.getItem("userName");
    if (str === "true") {
      dispatch(user_login({ userName, userId, loginFlag: true, idToken }));
    }
  }, []);

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseRecommnd = () => {
    Router.push("/recommendation");
  };

  const handleCloseUser = () => {
    Router.push("/userpage");
  };

  const deleteLogin = () => {
    signOut();
    dispatch(user_logout());
    handleClose();
  };

  const changeUrl = (str) => {
    Router.push(str);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        {/* <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        /> */}
      </FormGroup>
      <AppBar position="static" color="default">
        {/* ["default","inherit","primary","secondary","transparent"]. => whiteだとエラーが出てるので変更しました*/}
        <Toolbar>
          <img src="https://pbs.twimg.com/profile_images/1087001401413128192/b3WuEqTF.jpg"></img>
          <Typography className={classes.title}></Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              defaultValue={router.query.pref}
              inputProps={{ "aria-label": "search", readOnly: true }}
            />
          </div>
          {flag ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleCloseRecommnd}>
                  みんなのたびを見る
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    changeUrl("/testpage");
                  }}
                >
                  たびを計画する
                </MenuItem>
                <MenuItem onClick={handleCloseUser}>ユーザーページ</MenuItem>
                <MenuItem
                  onClick={() => {
                    deleteLogin();
                  }}
                >
                  ログアウトする
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    changeUrl("/recommendation");
                  }}
                >
                  みんなのたびを見る
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    changeUrl("/testpage");
                  }}
                >
                  たびを計画する
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    changeUrl("/signin");
                  }}
                >
                  ログインする
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    changeUrl("/signup/form");
                  }}
                >
                  新規登録する
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <style jsx>{`
        img {
          width: 60px;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
