<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Akmeninis</title>

    <!-- Scripts -->
    @vite(['resources/css/fonts.css', 'resources/css/font-awesome.min.css', 'resources/sass/main.scss'])

</head>
<body>
    <div class="freeze" style="display: none;"></div>
    <a id="top"></a>
    <content>
        <div class="top">
            <div class="menuButton fa fa-bars" ></div>
            @include('home.header', ['categories' => $categories])

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
                    <a class="link" href="#services">Į darbų galeriją</a>
                    
                </div>
            </section>
            
            <a id="services"></a>
            @if (count($categories) > 0)
                @include('home.galleries', ['categories' => $categories])
                @include('home.services', ['categories' => $categories])
            @endif
           
            

            <div class="faq-intro">

            </div>
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
            <section class="bottom">

            </section>
        </main>

        <a id="contacts"></a>
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
    @vite (['resources/js/home.jsx'])
</body>
</html>