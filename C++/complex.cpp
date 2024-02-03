// #include <iostream>
// using namespace std;
// class Complex
// {
//     public:
//     float real,imag;
//     Complex(){}
//     Complex(float r , float i)
//     {
//         real=r;
//         imag=i;
//     }
//     Complex operator+(Complex c)
//  {
//  Complex temp;
//  temp.real = c.real + real;
//  temp.imag = c.imag + imag;
//  return temp;
//  }
//  friend Complex operator - (Complex , Complex);
 
 
//  void display()
//  {
//     cout<<real<<"+"<<imag<<"i"<<endl;
//  }
// };
//  Complex operator - (Complex c1, Complex c2)
//  {
//     Complex temp;
//  temp.real = c1.real - c2.real;
//  temp.imag = c1.imag - c2.imag;
//  return temp;
//  }
// int main()
// {
//     Complex o1(34.4,56.6),o2(56.8, 11.3),o3;
//     o1.display();
//     o2.display();
//     cout<<"sub:\n";
//    o3=o1-o2;
//    o3.display();
//    return 0;

    

// }
#include <iostream>
#include <curl/curl.h>
#include <json/json.h>

// Replace "YOUR_API_KEY" with your OpenWeatherMap API key
const std::string API_KEY = "YOUR_API_KEY";
const std::string API_ENDPOINT = "http://api.openweathermap.org/data/2.5/weather";

// Callback function to handle the API response
size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* output) {
    size_t total_size = size * nmemb;
    output->append(static_cast<char*>(contents), total_size);
    return total_size;
}

int main() {
    std::string city;
    std::cout << "Enter city name: ";
    std::cin >> city;

    // Construct the API URL with the city name and API key
    std::string api_url = API_ENDPOINT + "?q=" + city + "&appid=" + API_KEY;

    CURL* curl;
    CURLcode res;

    // Initialize cURL
    curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();

    if (curl) {
        // Set the API URL
        curl_easy_setopt(curl, CURLOPT_URL, api_url.c_str());

        // Set the callback function to handle the response
        std::string response;
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);

        // Perform the HTTP request
        res = curl_easy_perform(curl);

        // Check for errors
        if (res != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
        } else {
            // Parse the JSON response
            Json::CharReaderBuilder reader;
            Json::Value root;
            std::istringstream response_stream(response);
            Json::parseFromStream(reader, response_stream, &root);

            // Extract and print weather information (you can customize this part)
            std::cout << "Weather in " << city << ":\n";
            std::cout << "Description: " << root["weather"][0]["description"].asString() << std::endl;
            std::cout << "Temperature: " << root["main"]["temp"].asFloat() << " °C\n";
            std::cout << "Humidity: " << root["main"]["humidity"].asInt() << " %\n";
        }

        // Clean up cURL
        curl_easy_cleanup(curl);
    }

    // Clean up cURL global resources
    curl_global_cleanup();

    return 0;
}
