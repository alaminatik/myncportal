<?php

namespace App\Http\Controllers;

use App\Models\ClientDetail;
use App\Models\TicketReply;
use App\Models\Tiket;
use App\Models\TiketFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Mail;

class TiketController extends Controller
{
    // public function __construct()
    // {

    //     if(!isset($_SESSION)) 
    //     { 
    //         session_start(); 
    //     }

    // }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['clients'] = ClientDetail::where('company_name','!=', NULL)->where('company_name','Greene Technology')->get(); 

        return view('tiket',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'user_id' => "required",
            'project_name' => "required",
            'ticket_subject' => "nullable",
            'priority' => "required",
            'email' => "required",
            'description' => "required",
            'image' => 'nullable|file|max:5120',
        ],
        [
            'user_id.required' => 'The Client field is required. Please fill it in.',
        ]);

        // return $request->file('image');

        // for ticket
        $ticket = new Tiket();
        $ticket->company_id = 1;
        $ticket->user_id = $request->user_id;
        $ticket->project_name = $request->project_name;

        if($request->ticket_subject){

            $ticket->subject = $request->ticket_subject;
        } else {
            
            $ticket->subject = $request->project_name;
        }

        $ticket->status = 'open';
        $ticket->priority = $request->priority;     
        $ticket->email = $request->email;     
        $ticket->added_by = 1;     
        $ticket->save();

        if(isset($ticket->id)){

            $ticketNumberUpdate = Tiket::find($ticket->id);
            $ticketNumberUpdate->ticket_number = $ticket->id;     
            $ticketNumberUpdate->save();
        }

         // for ticket description
         $ticketDescription = new TicketReply();
         $ticketDescription->ticket_id  = $ticket->id;
         $ticketDescription->user_id   = 1;
         $ticketDescription->message = $request->description;            
         $ticketDescription->save();

         // for ticket file

         
         if ($request->image) {
             try {
                $ticketFile = new TiketFile();
                 
                 // for file upload

                $imageFile = $request->file('image');   

                // $imageName = str_replace(' ', '_',date('YmdHis')) . '.'.$image->extension();
                // $imageName = time().'.'.$image->extension();

                $extension = $request->image->getClientOriginalExtension();
                $img_name = str_replace(' ', '_',date('YmdHis')) . '.' . $extension;
                
                
                $img_path = env('FILE_PATH', '/home/myncportal/public_html/public/').$ticket->id.'/';
                $img_src = env('FILE_PATH', '/home/myncportal/public_html/public/').$ticket->id.'/' . $img_name;
                // $imageFile->move($img_path, $img_name);
                $imageFile->move('user-uploads/ticket-files/'.$ticket->id.'/',$img_name);

                


                $ticketFile->filename  = $img_name;
                $ticketFile->hashname  = $img_name;

                $ticketFile->ticket_reply_id  = $ticketDescription->id;
                $ticketFile->user_id   = 1;          
                $ticketFile->save();
                 
            } catch (\Exception $e) {
  
                Log::info('error'.$e->getMessage());
            }
             
          }

           // for email

           $subject = 'Test Subject';
           $des = $request->project_name;


           $message = '';
           $message .= '<h4>Congratulations</h4>';
           $message .= '<p>Project Name <strong>'.$des .'</strong> </p>';
           $data['email_content'] = $message;
           $email = $request->email;

           if(!empty($email)){
            Mail::send('email.user_email', $data, function ($m) use ($subject,$email) {
                $m->from('info@nochallenge.net', 'Nochallenge.net');
                              
                // $m->to($email)->cc('enayet@nochallenge.net')->subject($subject);
                $m->to($email)->cc('alaminmia.jobs@gmail.com')->subject($subject);
            });

        }


         return redirect()->back()->with('success','Your ticket created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tiket $tiket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tiket $tiket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tiket $tiket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tiket $tiket)
    {
        //
    }
}
