/* eslint-disable no-unused-vars */
import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'
import { SergiCode } from './SergieCode'
import { ListadoApp} from './ListadoApp'
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard name='Dog chad' userName='dog'>
                Dog chad
            </TwitterFollowCard>
            <TwitterFollowCard name='Monica Chan' userName='monica'>
                Monica Chan
            </TwitterFollowCard>
            <TwitterFollowCard name='Apple inc.' userName='apple'>
                Apple inc.
            </TwitterFollowCard>
            <TwitterFollowCard name='Midu Dev' userName='Midudev'>
                Midu dev
            </TwitterFollowCard>

            <SergiCode value={100}/>

             <ListadoApp/>
        </section>
    )
}