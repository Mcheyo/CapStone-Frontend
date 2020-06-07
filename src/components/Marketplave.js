import React, { Component } from 'react'

class Marketplace extends Component { 

    componentDidMount(){ 
        fetch('https://localhost:3000/projects')
    }
}