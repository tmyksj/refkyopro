# AtCoder Beginner Contest 096
## B - Maximum Sum
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> abc(3);
    for (int i = 0; i < 3; i++) {
        cin >> abc[i];
    }

    sort(abc.begin(), abc.end(), greater<int>());

    int k;
    cin >> k;

    for (int i = 0; i < k; i++) {
        abc[0] *= 2;
    }

    int res = 0;
    for (int i = 0; i < 3; i++) {
        res += abc[i];
    }

    cout << res << endl;
}
```
