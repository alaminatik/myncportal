<!DOCTYPE html>
<html lang="en">
<head>
  <title>Create Ticket</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="{{ asset('assets/js/tiny-mce.js') }}" referrerpolicy="origin"></script>
  <script async src="https://www.google.com/recaptcha/api.js"></script>
  <script>

    tinymce.init({
      selector: ".subject-description",
      plugins: "advlist autolink lists link charmap print preview hr anchor pagebreak",
      toolbar_mode: "floating",
      height : "330"

    
    });
  </script>

<style>
body,p,h1,h2,h3,h4,h5,h6{
    font-family: "Poppins", sans-serif;
}
.form-control {
    height: 50px;
}
  
  .upload-container {
      /* width: 300px; */
      height: 200px;
      border: 1.5px dashed #899b8d;
      display: flex;
      flex-direction: column; 
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.02);
      border-radius: 8px;
  }
  .upload-container.dragover {
      border-color: #000;
  }
  #preview {
      margin-top: 20px;
      margin-bottom: 20px;
  }
  #preview img {
      max-width: 100%;
      max-height: 200px;
  }
  
  /* Container for the button */
  .refer-friend-button {
        width: 100%; 
        max-width: 310px; 
        margin: 0 auto; 
        padding: 10px; 
        color: #147529;
        background: #effef2;
        border: .5px solid #126a25;
        border-radius: 12px; 
        cursor: pointer; 
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px; 
    }

    /* Content inside the button */
    .button-content {
        display: flex;
        align-items: center;
        gap: 8px; /* Space between icon and text */
    }

    /* Icon styling */
    .refer-friend-button img {
        width: 20px; /* Adjust as needed */
        height: 20px; /* Adjust as needed */
    }

    /* Text styling */
    .refer-friend-button span {
        font-size: 16px; /* Adjust as needed */
        color: #333; /* Text color */
    }
    .upload-container{
        height: 130px;
    }
</style>

</head>
<body>
<header class="sticky-top d-flex justify-content-center align-items-center login_header bg-white px-4" style="
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 0 1px 0 0 #e8eef3;
    padding: 12px 0; border-bottom:1px solid #ccc;">
  <img class="mr-2 rounded" style="border-style: none;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-radius: .25rem !important;
    max-height: 60px;" src="https://ticket.myncportal.com/public/user-uploads/logo.jpg" alt="Logo">
</header>
<div style="padding-bottom: 12rem !important;padding-top: 6rem !important;" class="body_bg">
  @if (session('success'))
      <div class="alert alert-success" id="success-alert" style="width: 54%;margin-left: 23%;">
          {{ session('success') }}
      </div>
  
      <script>
          setTimeout(function() {
              document.getElementById('success-alert').style.display = 'none';
          }, 5000);
      </script>
    @endif
  
  
    @if (session('error'))
      <div class="alert alert-danger">
          {{ session('error') }}
      </div>
    @endif

  <div class="container box-shadow-custom col-md-6 mx-auto" style="background: white;
    float:none;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;border-radius: 2rem !important;">
  
    
    <h2 style="text-align: center;">Create Ticket</h2>
    <form class="bg-white border-top border-3 border-success p-3" method="POST" action="{{ route('tiket.store') }}" enctype="multipart/form-data" >
      @csrf
      <div class="col-md-6 col-sm-12">
          <div class="form-group">
              <label for="cars">Client</label>
              <select class="form-control" name="user_id" id="cars">
              @foreach ($clients as $item)
                  
              <option value="{{ $item->user_id }}" @if ($item->company_name === 'Greene Technology') @selected(true) @endif >{{ $item->company_name }}</option>
      
              @endforeach
                
              </select>
              @if ($errors->has('user_id'))
              <div class="text-danger">
                  {{ $errors->first('user_id') }}
              </div>
              @endif
          </div>    
      </div>
    
    <div class="col-md-6 col-sm-12">
              <div class="form-group">
        <label for="cars">Project Name</label>
        <select class="form-control" name="project_name">
              <!-- R3 Alliance -->
            <optgroup label="R3 Alliance">         
              <option value="R3 Alliance Website" {{ old('project_name') === 'R3 Alliance Website' ? 'selected' : '' }}>R3 Alliance Website</option>
              <option value="R3 Alliance EMR" {{ old('project_name') === 'R3 Alliance EMR' ? 'selected' : '' }}>R3 Alliance EMR</option>
            </optgroup>

          <!-- R3 Websites -->
          <optgroup label="R3 Websites">
              <option value="R3 Legacy EMR" {{ old('project_name') === 'R3 Legacy EMR' ? 'selected' : '' }}>R3 Legacy EMR</option>
              <option value="R3 Concierge" {{ old('project_name') === 'R3 Concierge' ? 'selected' : '' }}>R3 Concierge</option>
              <option value="R3 Consultants" {{ old('project_name') === 'R3 Consultants' ? 'selected' : '' }}>R3 Consultants</option>
              <option value="R3 Websites" {{ old('project_name') === 'R3 Websites' ? 'selected' : '' }}>R3 Websites</option>
              <option value="R3 Marketing" {{ old('project_name') === 'R3 Marketing' ? 'selected' : '' }}>R3 Marketing</option>
          </optgroup>

          <!-- R3 Medical -->
          <optgroup label="R3 Medical">
              <option value="R3 Medical Training Website" {{ old('project_name') === 'R3 Medical Training Website' ? 'selected' : '' }}>R3 Medical Training Website</option>
              <option value="R3 Medical Training Portal " {{ old('project_name') === 'R3 Medical Training Portal ' ? 'selected' : '' }}>R3 Medical Training Portal</option>
          </optgroup>
            <!-- Regen Supply -->
          <optgroup label="Regen Supply">
            <option value="Regen Website" {{ old('project_name') === 'Regen Website' ? 'selected' : '' }}>Regen Website</option>
            <option value="Regen Admin" {{ old('project_name') === 'Regen Admin' ? 'selected' : '' }}>Regen Admin</option>
          </optgroup>
        </select>
        @if ($errors->has('project_name'))
        <div class="text-danger">
            {{ $errors->first('project_name') }}
        </div>
        @endif
      </div>
    </div>

        <div class="col-md-6 col-sm-12">
            <div class="form-group">
                <label for="email">Project Url</label>
                <input type="text" class="form-control" id="ticket_subject" placeholder="Project Url" name="ticket_subject" value="{{old('ticket_subject')}}">
                @if ($errors->has('ticket_subject'))
                <div class="text-danger">
                    {{ $errors->first('ticket_subject') }}
                </div>
                @endif
            </div>
        </div>  

    <div class="col-md-6 col-sm-12">
              <div class="form-group">
        <label for="cars">Project Priority</label>
        <select class="form-control" name="priority">
          <option value="low" {{ old('priority') === 'low' ? 'selected' : '' }}>Low</option>
          <option value="medium" {{ old('priority') === 'medium' ? 'selected' : '' }}>Medium</option>
          <option value="high" {{ old('priority') === 'high' ? 'selected' : '' }}>High</option>
          <option value="urgent" {{ old('priority') === 'urgent' ? 'selected' : '' }}>Urgent</option>
        </select>
        @if ($errors->has('priority'))
        <div class="text-danger">
            {{ $errors->first('priority') }}
        </div>
        @endif
      </div>
    </div>

    <div class="col-md-12 col-sm-12">
        <div class="form-group">
          <label for="comment">Description</label>
          <textarea class="form-control subject-description" rows="3" id="comment" name="description" placeholder="Description">{{old('description')}}</textarea>
          @if ($errors->has('description'))
          <div class="text-danger">
              {{ $errors->first('description') }}
          </div>
          @endif
      </div>
    </div>
      
      
    <div class="col-md-12 col-sm-12">
      <label for="comment">Upload File</label>
      <div class="upload-container" id="dropzone">
        <div class="refer-friend-button">
          <div class="button-content">
              <img src="https://bdtaxpro.com/assets/icons/file.svg" alt="Select File">
              <span>Select File</span>
          </div>
        </div>
        <div style="font-weight: 600;margin-top: 1.75rem;">

          or drop a file
        </div>
      </div>
      <input type="file" id="fileInput" name="image" style="display: none;" accept="image/*">
      <input type="hidden" name="_token" value="{{ csrf_token() }}">
      <div id="preview"></div>
    </div>
    
    <div class="col-md-12 col-sm-12">
      <div class="form-group">
        <label for="email">Your Email Address</label>
        <input type="text" class="form-control" id="email" placeholder="Your Email Address" name="email" value="{{old('email')}}">
        @if ($errors->has('email'))
        <div class="text-danger">
            {{ $errors->first('email') }}
        </div>
        @endif
      </div>
    </div>
    <div class="col-md-12 col-sm-12">
      <div class="form-group">
        <label for="email">reCAPTCHA</label>
       <!-- Google Recaptcha Widget-->
          <div class="g-recaptcha mt-4" data-sitekey={{config('services.recaptcha.key')}}></div>
        @if ($errors->has('g-recaptcha-response'))
        <div class="text-danger">
            {{ $errors->first('g-recaptcha-response') }}
        </div>
        @endif
      </div>
    </div>
      <button type="submit" class="btn btn-primary custom_bttn" style="margin-left: 43%;">Submit Ticket</button>
    </form>
  </div>
</div>

</body>
</html>
<script type="text/javascript">
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');


    dropzone.addEventListener('dragover', (e) => {
      // console.log('Dragover event fired');
        e.preventDefault();
        dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      
        e.preventDefault();
        dropzone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        // console.log('Drop event fired',file);
        if (file.length > 0) {
            let dataTransfer = new DataTransfer();
            dataTransfer.items.add(files[0]); // Add file manually
            fileInput.files = dataTransfer.files; // Assign files to input
        }
        handleFile(file);
    });

    dropzone.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        handleFile(file);
    });



    function handleFile(file) {
        if (file && file.type.startsWith('image/')) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;

            const reader = new FileReader();
            reader.onload = (e) => {
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    }


</script>