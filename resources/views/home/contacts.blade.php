

@if ($contacts->phone != null)
<div class="row">
    <div class="ico"><span class="fa fa-phone"></span></div>
    <div class="desc">{{ $contacts->phone }}</div>
</div>
@endif

@if ($contacts->email != null)
<div class="row">
    <div class="ico"><span class="fa fa-envelope"></span></div>
    <div class="desc"><a href="mailto:info@akmeninis">{{ $contacts->email }}</a></div>
</div>
@endif

@if ($contacts->address != null)
<div class="row">
    <div class="ico"><span class="fa fa-map-marker"></span></div>
    <div class="desc">{{ $contacts->address }}</div>
</div>
@endif

@if ($contacts->worktime != null)
<div class="row">
    <div class="ico"><span class="fa fa-clock-o"></span></div>
    <div class="desc">{!! nl2br(e($contacts->worktime))!!}</div>
</div>
@endif
