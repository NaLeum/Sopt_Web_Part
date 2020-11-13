import { Route, Switch } from "react-router-dom";
import MemberDetail from "./MemberDetail";
import MemberList from './MemberList';

const Member = ({match}) => {
    return(
        <section style={{margin:"0 90px"}}>
        <Switch>
            <Route exact path={match.path} component={MemberList}/>
            <Route path={`${match.path}/:id`} component={MemberDetail}/>
        </Switch>
        </section>
    );
}
export default Member;