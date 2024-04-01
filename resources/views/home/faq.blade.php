
<section class="faq">
               
    <div class="faq-head">
        <h3>Answers to Your Frequently Asked Questions Bellow</h3>
    </div>
    
    <div class="faq-body">

        @foreach ($questions as $question)
        <div class="faq-item">
            <div class="question-row">
                <div class="question">{{$question->question}}</div>
                <div class="answer-button">+</div>
            </div>
            <div class="answer">{{$question->answer}}</div>
        </div>
        @endforeach

    </div>
</section>