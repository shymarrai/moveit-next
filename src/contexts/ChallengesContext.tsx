import {createContext, useState, ReactNode, useEffect}  from 'react'
import  Cookies  from 'js-cookie'
import challenges from '../../challenges.json'




interface Challenge{
    type: 'body';
    description: string,
    amount: number
}


interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}



interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData ) ;
export function ChallengesProvider({children}: ChallengesProviderProps){


    const [level, setLevel] = useState(1)

    const[currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1 ) * 4 ,2)

    useEffect(() => {

    }, []);

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));

    }, [level, currentExperience, challengesCompleted ]);




    function levelUp(){
      setLevel(level + 1)
      
  
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge =  challenges[randomChallengeIndex]
        setActiveChallenge(challenge);
    }
    


    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
    }

    return(

    <ChallengesContext.Provider value={{level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge

      }}>

        {children}
    </ChallengesContext.Provider>
    );
}