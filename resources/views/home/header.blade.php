<header class="close initial">
    <div class="logo">
        <a href="#top">akmeninis.lt</a>
        <button class="close-nav fa fa-times"></button>
    </div>
    
    <div class="nav">
        <ul>
            <li><a href="#about">Apie</a></li>
            <!-- If there are categories -->
            @if(count($categories) > 0)
            <li class="dropdown">Paslaugos <span class="dropMark fa fa-chevron-down"></span></a>
                <ul class="drop" style="display: none;">
                    @foreach($categories as $category)    
                    <li><a href="#cat{{$category->id}}">{{ $category->name }}</a></li>
                    @endforeach
                </ul>
                <div class="dropdown-freeze" style="display: none;"></div>
            </li>
            @endif

            <li><a href="#contacts">Kontaktai</a></li>
        </ul>
    </div>
    <a href="#" class="contactlink">Rašyti žinutę</a>
    
</header>