# AtCoder Beginner Contest 145
## B - Echo
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    bool res = (n % 2 == 0);
    for (int i = 0; i < n / 2 && res; i++) {
        res = (s[i] == s[i + n / 2]);
    }

    cout << (res ? "Yes" : "No") << endl;
}
```
