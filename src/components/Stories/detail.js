import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'
class BestSeller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events:[]
        }
    }

    componentDidMount() {
  
        axios
        .get('/evenements/', {
        })
        .then((res) => {                   
            var d1 = new Date();                            
            this.setState({
                events:res.data.filter(x=> new Date(x.dateDebut) >= d1).slice(0,5)
            })
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response)
            }
        })
    }

    render() {
        return (
            <>
   <div id="best-seller" class="product-flexslider "style={{display:"flex"}}>
                                                         
             
                    {
                                                    this.state.events.map((evt, idx) => {
                                
                                                      if (this.state.events==null)
                                                      {
                                                      return (
                                                        <p>Pas d'évènements disponibles.</p>
                                                      )
                                                      }
                                                      else{
                                                        var redirection='/evenement-details-publique?id='+this.state.events[idx]._id
                                                        var d1=moment(new Date( this.state.events[idx].dateDebut)).format('YYYY-MM-DD HH:mm')
                                                        var source=""
                                                        var d2 = new Date(evt.dateDebut);
                                                        if (evt.sport === undefined || evt.image==null || evt.image=="")
                                                        source = "/images/" + evt.sport + ".jpg"
                                                        else{
                                                          
                                                            source=evt.image
                                                           
                                                        }
                                                        return (
                                                            <div class="slider-items slider-width-col4 products-grid">

                        <div className="item">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"><Link to={redirection}
                                        title="Fresh Organic Mustard Leaves " className="product-image"><img
                                            src={source} style={{height: "275px",width:"235px"}}
                                            alt="Fresh Organic Mustard Leaves " /></Link>
                                        <div className="item-box-hover">
                                            <div className="box-inner">
                                             
                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add_cart">
                                    <div className="box-inner">
                                    <div class="actions"><span class="add-to-links">
                                                                      <a
                                                                           class="button btn-cart"
                                                                           type="button"
                                                                            title="Voir détails"
                                                                            href={redirection}><span>Voir détails</span></a>
                                                                            
                                                                            </span> </div>
                                                                            </div>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <div className="info-inner">
                                        <div className="item-title"><Link to={'/product-details-publique?id='+evt.id}
                                            title="Fresh Organic Mustard Leaves ">{this.state.events[idx].titre} </Link> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div className="rating"></div>
                                                    </div>
                                                    <p className="rating-links"><Link href="#">1 Review(s)</Link> <span
                                                        className="separator">|</span> <Link href="#">Add Review</Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"><span className="regular-price"><span
                                                    className="price">Le {d1}</span> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                                                        
                                                          )}
                                                    })
                                                }
                                                                                         
   
                                                </div>

            </>
        );
    }
}

export default BestSeller;