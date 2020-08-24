# AtCoder Beginner Contest 168
## B - ... (Triple Dots)
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int k;
    string s;
    cin >> k >> s;
    cout << (static_cast<int>(s.size()) <= k ? s : s.substr(0, k) + "...") << endl;
}
```
