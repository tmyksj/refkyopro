# AtCoder Beginner Contest 148
## B - Strings with the Same Length
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    string s, t;
    cin >> n >> s >> t;

    for (int i = 0; i < n; i++) {
        cout << s[i] << t[i];
    }
    cout << endl;
}
```
