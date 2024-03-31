<section class="featured">
    @foreach ($categories as $category)
        <div class="category">
            <a id="cat1"></a>
            <div class="image"></div>
            <div class="text">
                <h3>{{ $category->name }}</h3>
                <p>{{ $category->description }}</p>
                <button>View photos</button>
            </div>
        </div>
    @endforeach
</section>