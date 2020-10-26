import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';


import './terms.css';

const Terms = ({history}) => {
    return (
        <Fragment>
            <div class="container">
                    <div class="row justify-content-end">
                        <div class="col d-flex justify-content-center">
                            <span class="main-title">Terms and Conditionals</span>
                        </div>
                    </div>
                </div>

                {/* Container Terms n Conditionals */}
                <div class="container mt-4 fck-mb-150">
                    <div class="row">
                        <div class="col">
                            <ol>
                                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reprehenderit quo aliquid! Magnam sint sunt omnis quibusdam voluptatum similique explicabo. Ullam accusamus explicabo enim sit illum quo repellendus, quisquam dignissimos!</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                                <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quod ad facere laudantium error dolorem aspernatur at ipsum quasi saepe, quae minus molestias magni harum commodi cum dolores nobis quos ipsa ab! Accusantium maiores sequi, alias, unde nisi eveniet, laboriosam necessitatibus totam est cupiditate consequatur at voluptate. Voluptatem, eaque cupiditate.</p></li>
                            </ol>
                            <button onClick={() => history.goBack()} class="btn-pay btn-in-methods justify-self-end">Return</button>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default withRouter(Terms);