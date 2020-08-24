# AtCoder Beginner Contest 082
## B - Two Anagrams
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    sort(s.begin(), s.end());
    sort(t.begin(), t.end(), greater<char>());

    cout << (s < t ? "Yes" : "No") << endl;
}
```
