@extends('base.base')

@section('content')
<div class="d-flex flex-column flex-root bgi-size-cover bgi-position-center bgi-no-repeat" id="kt_app_root" style="background-image: url({{ asset(theme()->getMediaUrlPath() . 'misc/bg4.jpg') }})">
    <!--begin::Authentication - Sign-in -->
    <div class="d-flex flex-column flex-lg-row flex-column-fluid">
        <!--begin::Body-->
        <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <!--begin::Form-->
            <div class="d-flex flex-center flex-column flex-lg-row-fluid">
                <!--begin::Wrapper-->
                <div class="w-lg-500px p-10 card rounded-3">
                    {{ $slot }}
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Form-->

        </div>
        <!--end::Body-->
        <!--begin::Aside-->
        <div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            <!--begin::Aside-->
            <div class="d-flex flex-center flex-lg-start flex-column">
                <!--begin::Logo-->
                <a href="/metronic/" class="mb-7">
                    <img alt="Logo" src="{{ asset(theme()->getMediaUrlPath() . 'logos/custom-3.svg') }}">
                </a>
                <!--end::Logo-->

                <!--begin::Title-->
                <h2 class="text-white fw-normal m-0">
                    Branding tools designed for your business
                </h2>
                <!--end::Title-->
            </div>
            <!--begin::Aside-->
        </div>
        <!--end::Aside-->
    </div>
    <!--end::Authentication - Sign-in-->
</div>
@endsection