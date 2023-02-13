import React, { useContext } from 'react';
import { Top_Headlines } from "../components/top_headlines";
import { Context } from '../store/appContext';
import { Single_Muro } from '../muro/single_muro';
import { Games_of_Day } from '../components/games_of_day';
import Post_Image from '../components/post_image';

export default function Muro() {
    const { store } = useContext(Context);

    let posteos = store.upload_images;
    var byDate = posteos;
    byDate.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div className="container-fluid  p-0 p-lg-2">
            <div className="row g-0 ">
                <div className="col-lg-3 p-0 p-lg-1">
                    <div className="col-12 shadow_spans bg-white d-none d-lg-block sticky-top"><Top_Headlines /> </div>
                </div>
                <div className="col-lg-6 p-1 ">
                    <div className="col-12 d-block d-lg-none py-2">
                        <button className="btn btn_orange col-12" type="button" data-bs-toggle="offcanvas" data-bs-target="#post_meme" aria-controls="post_meme">Comparte tus Ideas</button>

                    </div>
                    <div className="col-12 bg-white">
                        {
                            posteos.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Single_Muro
                                            id={item.id}
                                            comentario={item.comentario}
                                            dislike={item.dislike}
                                            imgURL={item.imgURL}
                                            like={item.like}
                                            usuario={item.usuario}
                                        />
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
                <div hidden className="col-lg-3 p-1 sticky-top overflow-scroll mx-hv-100 d-none d-lg-block">
                    <div className="col-12 p-1 shadow_spans text-white mb-2 bg_gadient_dark">
                        <Post_Image />
                    </div>
                    <div className="col-12 shadow_spans bg-white">
                        <Games_of_Day />
                    </div>
                </div>
                <div className="offcanvas offcanvas-end text-white" tabIndex="-1" id="post_meme" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" className="btn text-reset" data-bs-dismiss="offcanvas">X</button>
                    </div>
                    <div className="offcanvas-body">
                        <Post_Image />
                    </div>
                </div>
            </div>
        </div>
    )
}
