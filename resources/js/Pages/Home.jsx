export default function Home() {

    return (
        <div>
            <div class="freeze" style="display: none;"></div>
            <a id="top"></a>
            <content>
                <div class="top">
                    <div class="menuButton fa fa-bars" ></div>
                    <header class="close initial">
                        <div class="logo">
                            <a href="#top">akmeninis.lt</a>
                            <button class="close-nav fa fa-times"></button>
                        </div>

                        <div class="nav">
                            <ul>
                                <li><a href="#about">Apie</a></li>
                                <li class="dropdown">Paslaugos <span class="dropMark fa fa-chevron-down"></span>
                                    <ul class="drop" style="display: none;">
                                        <li><a href="#cat1">Category 1</a></li>
                                        <li><a href="#cat2">Category 2</a></li>
                                        <li><a href="#cat3">Category 3</a></li>
                                        <li><a href="#cat4">Category 4</a></li>
                                    </ul>
                                    <div class="dropdown-freeze" style="display: none;"></div>
                                </li>

                                <li><a href="#contacts">Kontaktai</a></li>
                            </ul>
                        </div>
                            <a href="#" class="contactlink">Rašyti žinutę</a>
                            
                    </header>
                    
                    <div class="hero">
                            <h1>Šarūnas Gustaitis<br/>akmens dirbinių meistras.<br/>
                                Židiniai, interjero ir eksterjero elementai.</h1>
                    </div>
                </div>

                <main>
                <a id="about"></a>
                    <section class="about">
                        <h2>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quisquam illo officia voluptatum sit, quae exercitationem esse fugiat magni  praesentium. Ex vero dolores, fuga ratione culpa. Temporibus harum fugit rem aliquid facere sit dolore saepe. Quod eaque ad quisquam amet inventore.
                        </h2>
                        <div class="links">
                            <a class="link" href="#">Į darbų galeriją</a>
                            
                        </div>
                    </section>

                    <section class="gallery-selector">
                        <h3>Galerijos pagal kategorijas</h3>
                        <div class="galleries">
                            <div class="gallery-container">
                                <a href="#"><img src="./img/stairs.jpg" alt="gallery_name1"/></a>
                                <div class="label">Gallery name</div>
                            </div>
                            <div class="gallery-container">
                                <a href="#"><img src="./img/stairs.jpg" alt="gallery_name2"/></a>
                                <div class="label">Gallery name</div>
                            </div>
                            <div class="gallery-container">
                                <a href="#"><img src="./img/stairs.jpg" alt="gallery_name3"/></a>
                                <div class="label">Gallery name</div>
                            </div>
                            <div class="gallery-container">
                                <a href="#"><img src="./img/stairs.jpg" alt="gallery_name4"/></a>
                                <div class="label">Gallery name</div>
                            </div>
                            <div class="gallery-container">
                                <a href="#"><img src="./img/stairs.jpg" alt="gallery_name5"/></a>
                                <div class="label">Gallery name</div>
                            </div>
                            <div class="gallery-container">
                                <a href="#"><img src="./img/stairs.jpg" alt="gallery_name6"/></a>
                                <div class="label">Gallery name</div>
                            </div>
                        </div>
                        <div class="navigation">
                            <div class="nav-button prev"><span class="fa fa-arrow-left"></span></div>
                            <div class="nav-button next"><span class="fa fa-arrow-right"></span></div>
                        </div>

                    </section>

                    <section class="featured">
                        <div class="category">
                            <a id="cat1"></a>
                            <div class="image"></div>
                            <div class="text">
                                <h3>Category 1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!</p>
                                <button>View photos</button>
                            </div>
                        </div>
                        
                        <div class="category">
                            <a id="cat2"></a>
                            <div class="image"></div>
                            <div class="text">
                                <h3>Category 2</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!</p>
                                <button>View photos</button>
                            </div>
                        </div>

                        <div class="category">
                            <a id="cat3"></a>
                            <div class="image"></div>
                            <div class="text">
                                <h3>Category 3</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!</p>
                                <button>View photos</button>
                            </div>
                        </div>

                        
                        <div class="category">
                            <a id="cat4"></a>
                            <div class="image"></div>
                            <div class="text">
                                <h3>Category 4</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aspernatur!</p>
                                <button>View photos</button>
                            </div>
                        </div>
                    </section>
                    
                    <div class="faq-intro"></div>

                    <section class="faq">
               
                        <div class="faq-head">
                            <h3>Answers to Your Frequently Asked Questions Bellow</h3>
                        </div>
                        <div class="faq-body">
                            <div class="faq-item">
                                <div class="question-row">
                                    <div class="question">Question 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, itaque. Quam, tenetur?</div>
                                    <div class="answer-button">+</div>
                                </div>
                                <div class="answer">Answer 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi voluptatem corrupti consectetur rerum! Repudiandae laborum sed iure. Ducimus incidunt quos adipisci doloremque minima, dicta vitae saepe sapiente nulla dignissimos, quaerat ratione facilis magnam minus corrupti id laudantium reiciendis consectetur suscipit. Maxime iste aperiam error ipsam molestias! Optio, dolore ea?</div>
                            </div>
                            <div class="faq-item">
                                <div class="question-row">
                                    <div class="question">Question 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat ex cupiditate repudiandae minima consectetur nesciunt reiciendis voluptate. Iste nisi nesciunt impedit! Totam, quis quia?</div>
                                    <div class="answer-button">+</div>
                                </div>
                                <div class="answer">Answer 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sapiente illum debitis consequuntur expedita quas, error beatae, dolore numquam sit nulla reiciendis aliquid ea? Corporis illum esse porro error nulla odit libero harum reiciendis vitae adipisci!</div>
                            </div>
                            <div class="faq-item">
                                <div class="question-row">
                                    <div class="question">Question 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis assumenda minima in voluptate? Distinctio, quis?</div>
                                    <div class="answer-button">+</div>
                                </div>
                                <div class="answer">Answer 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nisi ipsam quas autem quis provident? Modi ex officia consequuntur est pariatur maiores aliquam aperiam? Quod, recusandae dolore! Laborum ad voluptates natus dolores!</div>
                            </div>
                            <div class="faq-item">
                                <div class="question-row">
                                    <div class="question">Question 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sapiente perspiciatis, dolores odio fugiat similique fuga ipsam, illum corrupti quos, temporibus accusamus et debitis?
                                    </div>
                                    <div class="answer-button">+</div>
                                </div>
                                <div class="answer">Answer 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsum!</div>
                            </div>
                        </div>
                    </section>

                    <section class="bottom"></section>
                
                </main>

                <footer>
                    <div class="col1">
                        <div><h2>Kontaktai</h2></div>
                        <div class="ico">
                            <a href="#top"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
                        </div>
                        <div class="logo-bottom">akmeninis.lt</div>
                    </div>
                    <div class="col2">
                        <div class="row">
                            <div class="ico"><span class="fa fa-phone"></span></div>
                            <div class="desc">+370 000 000</div>
                        </div>
                        <div class="row">
                            <div class="ico"><span class="fa fa-envelope"></span></div>
                            <div class="desc"><a href="mailto:info@akmeninis">info@akmeninis</a></div>
                        </div>
                        <div class="row">
                            <div class="ico"><span class="fa fa-map-marker"></span></div>
                            <div class="desc">Lorem ipsum dolor sit amet.</div>
                        </div>
                        <div class="row">
                            <div class="ico"><span class="fa fa-clock-o"></span></div>
                            <div class="desc">Darbo dienomis: 09:00 - 18:00<br/></div>
                        </div>
                    </div>
                </footer>
            </content>
        </div>
    );
}