import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
  render() {
    const {userlist} = this.props;
    return (
      <div className='container'>
        <div className="row">
            {
              userlist.map(x => {
                return(
                  <Card
                    key={x.id}
                    name={x.name}
                    salary={x.salary}
                  />
                )
              })
            }
        </div>
      </div>
    )
  }
}

export default CardList