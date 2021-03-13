import { Switch, Route } from 'react-router-dom';
import Section from '../Section/Section';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import NotFoundView from '../../views/NotFoundView/NotFoundView';

import s from './Main.module.css';
const Main = ({ dialogs, messages, posts }) => {
    console.log(dialogs);
    console.log(messages);
    console.log(posts);
    return (
        <main className={s.main}>
            <Section>
                <Switch>
                    <Route path="/profile" exact>
                        <Profile posts={posts} />
                    </Route>

                    <Route path="/messages" exact>
                        <Dialogs dialogs={dialogs} messages={messages} />
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
