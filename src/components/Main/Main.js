import { Switch, Route } from 'react-router-dom';
import Section from '../Section/Section';
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';
import Dialogs from '../Dialogs/Dialogs';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import NotFoundView from '../../views/NotFoundView/NotFoundView';

import s from './Main.module.css';
const Main = props => {
    // console.log(props.state.profilePage);
    // console.log(props.state.dialogsPage);
    return (
        <main className={s.main}>
            <Section>
                <Switch>
                    <Route path="/profile" exact>
                        <Profile data={props.state.profilePage} />
                    </Route>

                    <Route path="/friends" exact>
                        <Friends data={props.state.friendsPage} />
                    </Route>

                    <Route path="/messages" exact>
                        <Dialogs data={props.state.dialogsPage} />
                    </Route>

                    {/* <Route path="/messages/:id">< /></Route> */}

                    <Route path="/news" exact>
                        <News />
                    </Route>

                    <Route path="/music" exact>
                        <Music />
                    </Route>

                    <Route path="/settings" exact>
                        <Settings />
                    </Route>

                    <Route>
                        <NotFoundView />
                    </Route>
                </Switch>
            </Section>
        </main>
    );
};
export default Main;
