let states: any = {
    showPopUp: false,
    navigation: null,
    deviceToken: null,
    userCurrentLocation: {
      longitude: 151.208755,
      latitude: -33.870453,
    },
  };
  
  let connectors: any = {};
  
  const updateState = (field: any, value: any, listenToChanges = true) => {
    try {
      states[field] = value;
  
      if (listenToChanges && connectors[field]) {
        connectors = {...connectors, ...connectors[field](states[field])};
      }
    } catch (error) {
      throw error;
    }
  };
  
  const stateListener = (field: any, callback: Function) => {
    const stateHandler = (resState: any) => {
      callback(resState);
    };
  
    if (!connectors[field]) {
      connectors[field] = stateHandler;
    }
  };
  
  const getState = (field: any, callback?: Function) => {
    console.log('field', field);
    if (callback) {
      if(typeof states[field] !== 'undefined') callback(states[field]);
    } else {
      return states[field];
    }
  };
  
  const removeStateListener = (field: string) => {
    delete connectors[field];
  };
  
  export {stateListener, updateState, getState, removeStateListener};