<?php

namespace App\Http\Controllers;

use App\Models\ClientDetail;
use App\Models\TicketReply;
use App\Models\Tiket;
use App\Models\TiketFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
            'ticket_subject' => "required",
            'description' => "required",
            'ticket_file' => 'required|file|max:5120',
        ],
        [
            'user_id.required' => 'The Client field is required. Please fill it in.',
            'ticket_file.required' => 'Please select a file to upload.',
        ]);

        // return $request;

        // for ticket
        $ticket = new Tiket();
        $ticket->company_id = 1;
        $ticket->user_id = $request->user_id;
        $ticket->subject = $request->ticket_subject;
        $ticket->status = 'open';
        $ticket->priority = 'low';     
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

         $ticketFile = new TiketFile();

          if ($request->ticket_file) {
            try {
                 
                 // for file upload
                $extension = $request->ticket_file->getClientOriginalExtension();
                $img_name = str_replace(' ', '_',date('YmdHis')) . '.' . $extension;
                
                $img_path = env('FILE_PATH', '/home/myncportal/public_html/public/').$ticket->id.'/';
                $img_src = env('FILE_PATH', '/home/myncportal/public_html/public/').$ticket->id.'/' . $img_name;
                $request->ticket_file->move($img_path, $img_name);

                $ticketFile->filename  = $img_name;
                $ticketFile->hashname  = $img_name;
                 
            } catch (\Exception $e) {
  
                Log::info('error'.$e->getMessage());
            }
  
             
          }


         
         $ticketFile->ticket_reply_id  = $ticketDescription->id;
         $ticketFile->user_id   = 1;          
         $ticketFile->save();

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
