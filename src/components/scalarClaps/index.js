import React from 'react'
import providerFactory from '../../apollo/providerFactory'
import DisplayClapsComponents from './DisplayClaps';
import ClapComponent from './Clap';
import ClapAndRefreshComponent from './ClapAndRefresh';
import ClapAndUpdateComponent from './ClapAndUpdate';
import ClapAndUpdateWithValueComponent from './ClapAndUpdateWithValue';
import ClapAndUpdateOptimisticallyComponent from './ClapAndUpdateOptimistically';
import ClapAndUpdateOptimisticallyWithValueComponent from './ClapAndUpdateOptimisticallyWithValue';
import ClapAndUpdateOptimisticallyCorrectWithValueComponent from './ClapAndUpdateOptimisticallyCorrectWithValue';

const Provider = providerFactory('scalarClaps');

const withProvider = (Component) => (props) => <Provider><Component {...props} /></Provider>

export const DisplayClaps = withProvider(DisplayClapsComponents)
export const Clap = withProvider(ClapComponent)
export const ClapAndRefresh = withProvider(ClapAndRefreshComponent)
export const ClapAndUpdate = withProvider(ClapAndUpdateComponent)
export const ClapAndUpdateWithValue = withProvider(ClapAndUpdateWithValueComponent)
export const ClapAndUpdateOptimistically = withProvider(ClapAndUpdateOptimisticallyComponent)
export const ClapAndUpdateOptimisticallyWithValue = withProvider(ClapAndUpdateOptimisticallyWithValueComponent)
export const ClapAndUpdateOptimisticallyCorrectWithValue = withProvider(ClapAndUpdateOptimisticallyCorrectWithValueComponent)
