# AtCoder Beginner Contest 167
## A - Registration
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;
    cout << (s == t.substr(0, s.size()) ? "Yes" : "No") << endl;
}
```
