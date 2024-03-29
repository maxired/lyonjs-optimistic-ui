import React from 'react'
import providerFactory from '../../apollo/providerFactory'
import DisplayClapsComponents from './DisplayClaps';
import ClapComponent from './Clap';
import ClapOptimisticallyComponent from './ClapOptimistically';

const Provider = providerFactory('typedClaps');

const withProvider = (Component) => (props) => <Provider><Component {...props} /></Provider>

export const DisplayClaps = withProvider(DisplayClapsComponents)
export const Clap = withProvider(ClapComponent)
export const ClapOptimistically = withProvider(ClapOptimisticallyComponent)
