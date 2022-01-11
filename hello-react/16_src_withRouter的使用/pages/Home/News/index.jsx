import React, { Component } from 'react'

export default class News extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push(`/home/message/detail?id=001&title=message001`)
    }, 1000);
  }
  render() {
    return (
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a ratione vero recusandae iure tenetur quis quasi minima consequuntur sequi. At sint mollitia porro fuga molestias quas fugiat sapiente quam.</li>
          <li>Optio, ullam! Molestiae, magni cum. Modi quidem natus, ut perspiciatis maxime ea maiores eum temporibus recusandae sint? Ut nemo quas perferendis deleniti illum a provident velit repellendus optio, voluptas voluptatibus.</li>
          <li>Non voluptate deleniti quibusdam iure. Nulla sed, molestiae doloribus cumque minima sunt modi eaque officiis commodi mollitia quae corrupti rerum, vitae magnam saepe omnis, natus sapiente at accusamus delectus harum?</li>
        </ul>
      </div>
    )
  }
}
