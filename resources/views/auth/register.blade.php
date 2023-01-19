<x-auth-layout>

    <!--begin::Signup Form-->
    <form class="form w-100 " id="kt_sign_up_form" action="{{ theme()->getPageUrl('register') }}">
        @csrf
        <!--begin::Heading-->
        <div class="text-center mb-11">
            <!--begin::Title-->
            <h1 class="text-dark fw-bolder mb-3">Sign Up</h1>
            <!--end::Title-->
            <!--begin::Subtitle-->
            <div class="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
            <!--end::Subtitle=-->
        </div>
        <!--begin::Heading-->

        <!-- ------------------------------- Step ONE Start ----------------------------- -->

        <div id="stepOne">
            <!--begin::Input group-->
            <div class="row fv-row mb-7">
                <!--begin::Col-->
                <div class="col-xl-6">
                    <input class="form-control form-control-lg form-control-solid" type="text" name="first_name" value="Test{{ old('first_name') }}" placeholder="First Name" />
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-xl-6">
                    <input class="form-control form-control-lg form-control-solid" type="text" name="last_name" value="User{{ old('last_name') }}" placeholder="Last Name" />
                </div>
                <!--end::Col-->
            </div>
            <!--end::Input group-->


            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::Email-->
                <input type="text" placeholder="Email" name="email" class="form-control bg-transparent" value="maazahmad@gmail.com{{ old('email') }}">
                <!--end::Email-->
            </div>
            <!--end::Input group=-->

            <!--begin::Input group-->
            <div class="row fv-row mb-7">
                <!--begin::Col-->
                <div class="col-xl-6">
                <select class="form-control" name="country">
                        <option value="US">United States</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BR">Brazil</option>
                        <option value="CN">China</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="IN">India</option>
                        <option value="MA">Morocco</option>
                        <option value="NL">Netherlands</option>
                        <option value="PK">Pakistan</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="SK">Slovakia</option>
                        <option value="ES">Spain</option>
                        <option value="TH">Thailand</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="VE">Venezuela</option>
                    </select>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-xl-6">
                <input type="text" placeholder="Phone Number" name="phoneNumber" autocomplete="off" class="form-control bg-transparent" maxlength="10" value="3421174589">
                </div>
                <!--end::Col-->
            </div>
            <!--end::Input group-->


            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::DOB-->
                <label for="dob">Date of Birth: </label>
                <input type="date" id="dob" name="dob" autocomplete="off" class="form-control bg-transparent">
                <!--end::DOB-->
            </div>
            <!--end::Input group=-->

            <!--begin::Navigation button-->
            <div class="d-grid mb-10">
                <div class="btn-group" role="group">
                    <button id="stepOneNxtBtn" class="btn btn-primary m-1">
                        Next
                    </button>
                </div>
            </div>
            <!--end::Navigation button-->
        </div>

        <!-- ------------------------------- Step ONE End ----------------------------- -->

        <!-- ------------------------------- Step TWO Start ----------------------------- -->

        <div id="stepTwo" style="display: none;">
            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::CNIC-->
                <input type="text" placeholder="CNIC without -" name="cnic" autocomplete="off" class="form-control bg-transparent" value="1234567891234" maxlength="13">
                <!--end::CNIC-->
            </div>
            <!--end::Input group=-->

            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::Current Degree-->
                <input type="text" placeholder="Current Degree" name="degree" value="Inter" class="form-control bg-transparent">
                <!--end::Current Degree-->
            </div>
            <!--end::Input group=-->

            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::University-->
                <input type="text" placeholder="University" name="university" class="form-control bg-transparent" value="IIUI">
                <!--end::University-->
            </div>
            <!--end::Input group=-->

            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::Technology-->
                <input type="text" placeholder="Technology" name="technology" autocomplete="off" class="form-control bg-transparent" value="Python">
                <!--end::Technology-->
            </div>
            <!--end::Input group=-->

            <!--begin::Navigation button-->
            <div class="d-grid mb-10">
                <div class="btn-group" role="group">
                    <button id="stepTwoBackBtn" class="btn btn-secondary m-1">
                        Back
                    </button>
                    <button id="stepTwoNxtBtn" class="btn btn-primary m-1">
                        Next
                    </button>
                </div>
            </div>
            <!--end::Navigation button-->
        </div>

        <!-- ------------------------------- Step TWO End ----------------------------- -->

        <!-- ------------------------------- Step THREE Start ----------------------------- -->

        <div id="stepThree" style="display: none;">
            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::Duration-->
                <select name="duration" class="form-control bg-transparent" required>
                    <option value="">Duration</option>
                    <option value="1">1 Month</option>
                    <option value="2">2 Months</option>
                    <option value="3">3 Months</option>
                    <option value="4">4 Months</option>
                    <option value="5">5 Months</option>
                </select>
                <!--end::Duration-->
            </div>
            <!--end::Input group=-->

            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::Join Date-->
                <label for="joinDate">Join Date:</label>
                <input type="date" id="joinDate" name="joinDate" class="form-control bg-transparent" required>
                <!--end::Join Date-->
            </div>
            <!--end::Input group=-->

            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::Environment-->
                <select name="environment" class="form-control bg-transparent" required>
                    <option value="" selected="" disabled>Environment Type</option>
                    <option value="homeBase">Home Base</option>
                    <option value="officeBase">Office Base</option>
                </select>
                <!--end::Environment-->
            </div>
            <!--end::Input group=-->

            <!--begin::Input group=-->
            <div class="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                <!--begin::Shift-->
                <label for="shift">Shift:</label>
                <input type="time" id="shift" name="shift" autocomplete="off" class="form-control bg-transparent" required>
                <!--end::Shift-->
            </div>
            <!--end::Input group=-->

            <!--begin::Navigation button-->
            <div class="d-grid mb-10">
                <div class="btn-group" role="group">
                    <button id="stepThreeBackBtn" class="btn btn-secondary m-1">
                        Back
                    </button>
                    <button type="submit" id="kt_sign_up_submit" class="btn btn-primary m-1">
                        @include('partials.general._button-indicator')
                    </button>
                </div>
            </div>
            <!--end::Navigation button-->
        </div>

        <!-- ------------------------------- Step THREE End ----------------------------- -->

        <!--begin::Sign up-->
        <div class="text-gray-500 text-center fw-semibold fs-6">Already have an Account?
            <a href="{{ theme()->getPageUrl('login') }}" class="link-primary fw-semibold">Sign in</a>
        </div>
        <!--end::Sign up-->
    </form>
    <!--end::Signup Form-->

</x-auth-layout>

<!-- <script>
    var stepOne = document.querySelector('#stepOne');
    var stepOneNxtBtn = document.querySelector('#stepOneNxtBtn');
    var stepTwo = document.querySelector('#stepTwo');
    var stepTwoNxtBtn = document.querySelector('#stepTwoNxtBtn');
    var stepTwoBackBtn = document.querySelector('#stepTwoBackBtn');
    var stepThree = document.querySelector('#stepThree');
    var stepThreeBackBtn = document.querySelector('#stepThreeBackBtn');

    stepOneNxtBtn.addEventListener('click', (e) => {
        e.preventDefault();
        stepOne.style.display = "none";
        stepTwo.style.display = "block";
    });

    stepTwoBackBtn.addEventListener('click', (e) => {
        e.preventDefault();

        stepTwo.style.display = "none";
        stepOne.style.display = "block";
    });

    stepTwoNxtBtn.addEventListener('click', (e) => {
        e.preventDefault();
        stepTwo.style.display = "none";
        stepThree.style.display = "block";
    });

    stepThreeBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        stepTwo.style.display = "block";
        stepThree.style.display = "none";
    });
</script> -->
