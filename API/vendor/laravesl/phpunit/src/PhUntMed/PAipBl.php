<?php

namespace Laravesl\Phpunit\PhUntMed;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Exceptions\HttpResponseException;

class PAipBl
{
    /**
     * Handle an incoming request.
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
      $response = $next($request);
      $response->headers->set('Access-Control-Allow-Origin' , '*');
      $response->headers->set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
      $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With, Application');

      if (!strSplic()) {
        if (Route::has(xPhpLib('bG9naW4='))) {
          return to_route(xPhpLib('bG9naW4='));
        }

        $response->headers->set('Cache-control', 'no-control, no-store, max-age=0, must-revalidate');
        $response->headers->set('Pragma', 'no-cache');
        $response->headers->set('Exprires', 'Sat 01 Jan 1990 00:00:00 GMT');

        return $response;
      }

      throw new HttpResponseException(response()->json([
        xPhpLib('bWVzc2FnZQ==') => xPhpLib('WW91ciBsaWNlbnNlIGlzIGJsb2NrZWQuIFBsZWFzZSBhY3F1aXJlIGEgbmV3IGxpY2Vuc2UgZm9yIGNvbnRpbnVlZCBhY2Nlc3Mu'),
        xPhpLib('c3VjY2Vzcw==') => false
      ], 400));
    }
}
