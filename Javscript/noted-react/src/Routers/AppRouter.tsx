import Dashboard from "../Components/Pages/Dashboard.tsx"
import { Redirect, Switch, Route} from "react-router-dom"

const AppRouter: React.FC = () => {
     const { isAuthed } = useAuth()

     return (
          <>
               <Switch>
                    <Route exact path='/dashboard'>{isAuthed ? <Dashboard/> : <Redirect to='/home'/>}</Route>
               </Switch>
          </>
     )
}