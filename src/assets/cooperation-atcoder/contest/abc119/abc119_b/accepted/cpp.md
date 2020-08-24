# AtCoder Beginner Contest 119
## B - Digital Gifts
```cpp
#include <iomanip>
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;

    double sum = 0;
    for (int i = 0; i < n; i++) {
        double x;
        string u;
        cin >> x >> u;

        if (u == "JPY") {
            sum += x;
        } else {
            sum += 380000 * x;
        }
    }

    cout << setprecision(12) << fixed << sum << endl;
}
```
