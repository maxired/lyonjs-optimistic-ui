import React from 'react'
import providerFactory from '../../apollo/providerFactory'
import DisplayClapsComponents from './DisplayClaps';
import ClapComponent from './Clap';

const Provider = providerFactory('scalarClaps');

export const DisplayClaps = (props) => (<Provider><DisplayClapsComponents {...props} /></Provider>)
export const Clap = (props) => (<Provider><ClapComponent {...props} /></Provider>)
