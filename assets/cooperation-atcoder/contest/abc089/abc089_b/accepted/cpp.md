# AtCoder Beginner Contest 089
## B - Hina Arare
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;

    string res = "Three";
    for (int i = 0; i < n; i++) {
        string s;
        cin >> s;

        if (s == "Y") {
            res = "Four";
        }
    }

    cout << res << endl;
}
```
