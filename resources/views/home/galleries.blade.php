<section class="gallery-selector">
                <h3>Galerijos pagal kategorijas</h3>
                <div class="galleries">
                    @foreach($categories as $category)
                        <div class="gallery-container">
                            <a href="#"><img src="../images/stairs.jpg" alt="gallery_name1"/></a>
                            <div class="label">{{ $category->name }}</div>
                        </div>
                    @endforeach
                </div>
                
                <div class="navigation">
                    <div class="nav-button prev"><span class="fa fa-arrow-left"></span></div>
                    <div class="nav-button next"><span class="fa fa-arrow-right"></span></div>
                </div>
                
            </section>