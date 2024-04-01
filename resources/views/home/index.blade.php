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
                    {{ $description }}
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
            @if (count($questions) > 0)
                @include('home.faq', ['questions' => $questions])
            @endif
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
                @include('home.contacts')
            </div>
        </footer>
    </content>
    @vite (['resources/js/home.jsx'])
</body>
</html>