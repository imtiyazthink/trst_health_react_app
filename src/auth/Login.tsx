import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 400,
    margin: `${theme.spacing(0)} auto`,
    height: "30rem",
  },
  loginBtn: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    color: "rgb(37, 150, 190)",
  },
  header: {
    textAlign: "center",
    background: "#212121",
    color: "#fff",
  },
  card: {
    marginTop: theme.spacing(20),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login App" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
            />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
            />
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" className={classes.loginBtn}>
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
