import React from "react";
import MyStack from "./Stack";
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from "@ui-kitten/components";

const App = () => {
  return(
    <ApplicationProvider {...eva} theme={eva.light} >
       <MyStack/>
    </ApplicationProvider>
  )
}

export default App;