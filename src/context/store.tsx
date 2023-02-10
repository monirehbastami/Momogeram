import { createContext, useReducer } from "react";
import { ContextAction, ContextActionTypes, ContextAppState } from "../@types/context/context.types";
import { ContactReducer } from "./contact/contact.reducer";
import { MessageReducer } from "./messages/message.reducer";

const InitialState: ContextAppState= {
  contacts: {
    contactsList:[],
    searchList:[]
  },
  messages:{
    roomId: "",
    MessageList: [],
  }
}
const AppContext = createContext<{
  state: ContextAppState;
  dispatch: React.Dispatch<ContextAction<any, any>>;
}>({
  state: InitialState,
  dispatch: () => null,
});

const CombineReducer = (
  { contacts,messages}: ContextAppState,
  action: any
) => ({
  contacts: ContactReducer(contacts, action),
  messages:MessageReducer(messages,action)
});
interface AppContextProviderProps extends React.PropsWithChildren{
    
}

const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({children}):JSX.Element => {
  const [state, dispatch] = useReducer(CombineReducer,InitialState);
    return ( 
        
        <AppContext.Provider value={{ state ,dispatch }}>
        {children}
        </AppContext.Provider>
    );
}

export { AppContextProvider,AppContext };