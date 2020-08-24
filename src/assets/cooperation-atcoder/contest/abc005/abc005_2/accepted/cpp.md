# AtCoder Beginner Contest 005
## B - おいしいたこ焼きの食べ方
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> t(n);
    for (int i = 0; i < n; i++) {
        cin >> t[i];
    }

    cout << *min_element(t.begin(), t.end()) << endl;
}
```
