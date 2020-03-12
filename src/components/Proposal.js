import React from 'react'

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Proposal extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills
}
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Proposal)
